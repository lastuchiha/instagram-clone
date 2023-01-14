import { memo } from "react"
import usePost from "../hooks/use-post"
import Actions from "./actions"
import Body from "./body"
import Comment from "./comment"
import Container from "./container"
import Head from "./head"


export default memo(function Post({ userId, postId, profileMode }) {
    const { post, ...actions } = usePost(userId, postId)

    return (
        <Container isLoading={!post}>
            {!profileMode && <Head postedBy={post?.postedBy} />}
            <Body imageUrl={post?.imageUrl} />
            {!profileMode && <Actions {...actions} />}
            {!profileMode && <Comment />}
        </Container>

    )
})