import { useState } from 'react';
import {Content, Title,PublishButton} from './index'

const Article = (props)=>{
    const [isPublished,setIsPublished] = useState(false)
    const publishArticle = () =>{
        console.log(1111111);
        setIsPublished(true)
    }
    return(
       <div>
        <Title title={props.title}/>
        <Content content={props.content}/>
        <PublishButton isPublished = {isPublished} onClick={publishArticle}/>
       </div>
    );
};

export default Article;