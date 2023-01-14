import { auth, db, storage } from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, limit, query, serverTimestamp, updateDoc, where, writeBatch } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"


export const signInService = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
}


export const getUsernamebyUID = async (uid) => {
    const usernameRef = doc(db, "usernames", uid)
    const username = await (await getDoc(usernameRef)).data()
    return username
}

export const signUpService = async (email, fullName, username, password) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    const batch = writeBatch(db)
    const usersRef = doc(db, "users", username)
    const usernameRef = doc(db, "usernames", user.uid)

    batch.set(usersRef,
        {
            email,
            fullName,
            username,
            following: [],
            followers: [],
            posts: [],
            profileUrl: '/DEFAULT.png',
            isPrivate: false,
            isOfficial: false,
            bio: ''
        }
    )
    batch.set(usernameRef, { username: username })

    await batch.commit()
}

export const signOutService = () => signOut(auth)

export const checkUsernameExists = async (username) => {
    return (await getDoc(doc(db, "users", username.toLowerCase()))).exists()
}

export const getUsernameByUID = async (uid) => {
    const usernameSnap = await getDoc(doc(db, "usernames", uid))
    if (usernameSnap.exists())
        return await usernameSnap.data()
    return null;
}

export const getUserDetailsByUid = async (uid) => {
    const usersRef = doc(db, "users", uid)
    const userData = await (await getDoc(usersRef)).data()
    return userData
}

export const getSuggestions = async (username) => {
    const { following } = await getUserDataByUsername(username)

    const q = query(collection(db, "users"),
        where("username", "not-in", [...following, username]),
        limit(3))

    const queryResult = await getDocs(q)
    return queryResult.docs.map(doc => doc.data())
}


export const getUserDataByUsername = async (username) => {
    const user = await getDoc(doc(db, "users", username))
    return user.exists() ? await user.data() : null
}

export const followOrUnfollowUser = async (who, whom, follow) => {
    const batch = writeBatch(db);

    batch.update(doc(db, "users", who), { following: follow ? arrayUnion(whom) : arrayRemove(whom) })
    batch.update(doc(db, "users", whom), { followers: follow ? arrayUnion(who) : arrayRemove(who) })

    await batch.commit()
}


export const getPost = async (postId) => {
    const post = await getDoc(doc(db, "posts", postId))
    const postData = post.data()
    const { profileUrl, username, isOfficial } = await getUserDetailsByUid(postData.postedBy)
    return { ...postData, postedBy: { profileUrl, username, isOfficial } };
}

export const likePost = async (postId, username, op) => {
    const postRef = doc(db, "posts", postId)
    updateDoc(postRef, { likes: (op ? arrayUnion(username) : arrayRemove(username)) })
}


export const uploadFile = async (path, file) => {
    const fileRef = (await uploadBytesResumable(ref(storage, path), file)).ref;
    if (!fileRef)
        throw Error("Image not uploaded")

    return await getDownloadURL(fileRef)
}



export const submitPost = async (img, postedBy) => {
    const postRef = collection(db, "posts")
    const userRef = doc(db, "users", postedBy)
    const imageUrl = await uploadFile(`posts/${postedBy}${Date.now()}.jpeg`, img)

    const res = await addDoc(postRef, {
        imageUrl,
        postedBy,
        likes: [],
        postedAt: serverTimestamp()
    })
    console.log("res", res)

    await updateDoc(userRef, {
        "posts": arrayUnion(res.id)
    })

}

export const getFeed = async (username) => {
    const user = await getUserDataByUsername(username)
    if (!user)
        throw Error("Something went wrong");

    const q = query(collection(db, "posts"), where("postedBy", "in", user.following))

    const queryResult = await getDocs(q)
    return queryResult.docs.map(doc => doc.id)

}

export const updateProfile = async (oldUsername, { username, name, bio, profileUrl }) => {
    return await updateDoc(doc(db, "users", oldUsername), {
        username,
        fullName: name,
        bio,
        profileUrl
    })
}
