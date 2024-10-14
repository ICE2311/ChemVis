import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        required: true
    },
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    replies: [{
        username: {
            type: String,
            required: true
        },
        commentId: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: new Date().getTime()
        }
    }]
}, {
    timestamps: true
})

const comment = mongoose.model("comments", commentSchema)
export default comment