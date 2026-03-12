'use client'

import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'
import { Input } from './input'

interface PhoneInputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'onChange' | 'value'
> {
	onChange?: (value: string) => void
	value?: string
}

const formatPhone = (digits: string): string => {
	if (!digits) return ''

	const d = digits.slice(0, 11)
	const size = d.length

	let result = '+7'

	if (size === 1) return result

	result += ' ('
	if (size >= 2) result += d.slice(1, 4)
	if (size >= 5) result += ') ' + d.slice(4, 7)
	if (size >= 8) result += '-' + d.slice(7, 9)
	if (size >= 10) result += '-' + d.slice(9, 11)

	return result
}

const normalizeDigits = (input: string) => {
	const digits = input.replace(/\D/g, '')
	if (!digits) return ''

	if (digits.startsWith('7')) return digits
	if (digits.startsWith('8')) return '7' + digits.slice(1)

	return '7' + digits
}

export const CustomPhoneInput: FC<PhoneInputProps> = ({ onChange, value, ...props }) => {
	const [internalValue, setInternalValue] = useState('')

	const digits = value !== undefined ? normalizeDigits(value) : ''
	const displayValue = value !== undefined ? formatPhone(digits) : internalValue

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const normalized = normalizeDigits(e.target.value)
		const formatted = formatPhone(normalized)

		if (value === undefined) {
			setInternalValue(formatted)
		}

		onChange?.(normalized)
	}

	return (
		<Input
			{...props}
			type='tel'
			value={displayValue}
			onChange={handleChange}
			placeholder='+7 (700) 000-00-00'
		/>
	)
}
