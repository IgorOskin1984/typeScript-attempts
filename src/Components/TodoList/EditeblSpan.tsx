import { ChangeEvent, KeyboardEvent, useState } from "react"

type EditeblSpanPropsType = {
	title: string
	onChange: (newValue: string) => void
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
		props.onChange(title)
	}

	const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') activateViewMode()
	}

	return editMode
		? <input onKeyUp={onKeyUpHandler} onChange={onChangeTitleHandler} onBlur={activateViewMode} type="text" value={title} autoFocus />
		: <span onDoubleClick={activateEditMode}>{props.title}</span>

}