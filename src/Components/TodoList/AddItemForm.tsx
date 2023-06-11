
return <>
	<div className={s.wrapper}>
		<div className={s.inputContainer} >
			<input placeholder={'type new task'}
				value={newTaskTitle}
				onChange={onNewTaskTitleChange}
				onKeyUp={onKeyPressUpHendler}
				onBlur={() => { setError('') }}
				className={error ? s.error : ''}
			/>
			<button onClick={addTask} >+</button>
		</div>
		{error &&
			<div className={s.errorMessageDiv}>
				<p>{error}</p>
			</div>
		}
	</div>
</>
}