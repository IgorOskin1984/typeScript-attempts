import { ChangeEvent, useState } from "react"

type EditeblSpanPropsType = {
	title: string
}
export const EditeblSpan = (props: EditeblSpanPropsType) => {
	const [editMode, seteditMode] = useState(false)
	const [title, setTitle] = useState('')

	const activateEditMode = () => {
		seteditMode(true)
		setTitle(props.title)
	}
	const activateViewMode = () => {
		seteditMode(false)
	}

	const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	return editMode
		? <input onChange={onChangeTitleHandler} onBlur={activateViewMode} type="text" value={title} autoFocus />
		: <span onDoubleClick={activateEditMode}>{props.title}</span>

}