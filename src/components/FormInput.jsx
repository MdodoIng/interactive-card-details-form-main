import React, { useState } from 'react'

const FormInput = (props) => {
	const [focused, setFocused] = useState(false)
	const handelFocus = (e) => {
		setFocused(true)
	}
	const { label, small, id, errorV, ...inputProps } = props

	return (
		<div >
			<ul>
				<p >
					{label}
				</p>
				<input
					{...inputProps}

					onBlur={handelFocus}
					onFocus={() => props.name === 'csv' && setFocused(true)}

				/>
				<small className='onSmall'>
					{id === '1' ? errorV.username : ''}{id === '2' ? errorV.number : ''}
				</small>
			</ul>
		</div>
	)
}



const FormInputLast = (props) => {
	const [focused, setFocused] = useState(false)
	const handelFocus = (e) => {
		setFocused(true)
	}
	const { label, small, id, errorV, ...input } = props
	console.log('label')
	return (
		<>
			<input
				{...input}

				onBlur={handelFocus}
				onFocus={() => props.name === 'csv' && setFocused(true)}
				focused={focused.toString()}

			/>
			<small className='onSmall' style={id === '3' || id === '4' ? { display: 'none' } : {}}>
				{errorV?.csv}
			</small>
		</>
	)
}

export { FormInput, FormInputLast }