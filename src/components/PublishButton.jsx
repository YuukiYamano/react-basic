const PublishButton = (props) =>{
    return(
        <button onClick={() => props.onClick()}>
            ε¬ιηΆζ: {props.isPublished.toString()}
        </button>
    )
}

export default PublishButton;

