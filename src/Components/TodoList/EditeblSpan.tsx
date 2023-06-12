import { ChangeEvent, KeyboardEvent, useState } from "react"

type EditeblSpanPropsType = {
	title: string,
	changeTitle: (title: string) => void
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
		props.changeTitle(title)
		setTitle('')
	}

	const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') activateViewMode()
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	return editMode
		? <input onChange={onChangeHandler}
			onKeyUp={onKeyUpHandler} onBlur={activateViewMode} autoFocus type="text"
			value={title} />
		: <span onDoubleClick={activateEditMode}>{props.title} </span>
}