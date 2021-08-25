import React from 'react'

const Select = ({
  options = [],
  allTitle = "all",
  value = "all",
  onSelect = (_) => null,
}) => {
  const handleChange = (e) => {
    e.preventDefault()
    onSelect(e.target.value)
  }
  let optionElements = options.map(op => {
    return (
      <option value={op}>
        {op}
      </option>
    )
  })
  optionElements.unshift(
    <option key="all" value={allTitle}>
      {allTitle}
    </option>
  )

  return (
  <>
    <select value={value} onChange={handleChange}>
      {optionElements}
    </select>
  </>
  )
}

export default Select