import React, { useState } from "react"
import Button from '@material-ui/core/Button'
import * as CreateCommentStyles from './CreateComment.module.css'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useEffect } from "react"

const CreateComment = (props) => {
    const [ text, setText ] = useState('')
    const [ likes, setLikes ] = useState('')
    const [ dislikes, setDislikes ] = useState('')
    const [ stars, setStars ] = useState(5)

    const handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
            genComments: text,
            likes: likes,
            dislikes: dislikes,
            rating: stars
		}
		props.handleCreateComment(formData)
        props.setToggleNewComment(false)
    }

    return (
        <form className={CreateCommentStyles.createForm} onSubmit={handleSubmit}>
            <div className="question-prompt">
                    <label>Enter Comment:</label>
            </div>
            
            <input
                required
                autoComplete='off'
                placeholder="Comment"
                name="genComments"
                value={text}
                onChange={(e) => setText(e.target.value)}>
            </input>

            <input
                autoComplete='off'
                placeholder="Likes"
                name="likes"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}>
            </input>

            <input
                autoComplete='off'
                placeholder="Dislikes"
                name="dislikes"
                value={dislikes}
                onChange={(e) => setDislikes(e.target.value)}>
            </input>

            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rating:</Typography>
            <Rating
                name="stars"
                value={stars}
                onChange={(event, newValue) => {setStars(newValue)}}
            />
            </Box>
            
            <div className={CreateCommentStyles.border}></div>
            
            <Button type="submit" color="primary"> 
                Submit
            </Button>
        </form>
    )
}

export default CreateComment