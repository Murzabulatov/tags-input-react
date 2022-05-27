import React, { Component } from "react";
import classes from './TagsInput.module.css';
import TagItem from "./TagItem/TagItem";

class TagsInput extends Component {
    state = {
        tags: [],
        warning: false
    }
    keyUpHandler = (event) => {
        const match = event.key.match(/[^a-zA-Z0-9\s]/g)
        const newTag = event.target.value.match(/[a-zA-Z0-9\s]/g)
        const state = this.state.tags
        if(match && newTag) {
            this.setState({
                tags: [...this.state.tags, newTag.join('')],
                warning: false
            })
            event.target.value = ''
        }
        if (event.key === 'Backspace' && !newTag) {
            if(this.state.warning) {
                event.target.value = this.state.tags[state.length - 1] || ''
                if(state.length > 1) {
                    state.splice(-1)
                    this.setState({
                        tags: state,
                        warning: false
                    })
                } else {
                    this.setState({
                        tags: [],
                        warning: false
                    })
                }
            } else {
                this.setState({
                    warning: true
                })
            }

        }

    }
    onDelete = (tag) => {
        const newState = this.state.tags.filter(el => el !== tag);
        this.setState({
            tags: newState,
            warning: false
        })
    }
    render() {
        return (
            <label>
                <div className={classes.TagsInput}>
                    {this.state.tags.map((tag, index) => {
                        let warning = index === this.state.tags.length - 1 ? this.state.warning : false

                        return (
                            <TagItem
                                key={'tag' + index}
                                tag={tag} onDelete={this.onDelete}
                                warning={warning}
                            />
                            )
                    })}

                    <input className={classes.TextInput} onKeyUp={this.keyUpHandler} type="text" placeholder={'Add a tag'}/>
                </div>
            </label>
        )
    }
}

export default TagsInput