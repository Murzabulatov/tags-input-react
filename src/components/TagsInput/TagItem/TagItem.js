import React from "react";
import classes from './TagItem.module.css';

const TagItem = (props) => {
    const cn = [classes.TagItem]
    const cnIcon = ['fa fa-times', classes.close]

    props.warning && cn.push(classes.warning)
    return(
        <div className={cn.join(' ')}>
            <span>{props.tag}</span>
            <i
                className={cnIcon.join(' ')}
                onClick={() => props.onDelete(props.tag)}
            />
        </div>
    )
}

export default TagItem