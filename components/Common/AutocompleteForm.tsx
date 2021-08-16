import React from 'react'

const style = {
  label: `text-gray-700`,
  disabled: `cursor-not-allowed`,
  container: `relative w-full`,
  default: `border focus:border-2 border-gray-500 focus:border-blue outline-none w-full my-4 rounded-sm pr-4 pl-5 md:pl-10 py-3`,
  suggestion: {
    activeItem: 'bg-gray-300',
    item: `px-4 py-3 focus text-sm text-gray-700 cursor-pointer hover:bg-gray-200`,
    list: `shadow-xl absolute top-full left-0 right-0 border w-auto md:max-w-xs overflow-y-auto max-h-80 mt-2 bg-white p-3 z-20`,
  },
}

interface formProps {
  suggestions: Array<string>
  value: string
  setValue: any
  placeholder: string
}

const AutoCompleteForm = ({
  suggestions,
  value,
  setValue,
  placeholder,
}: formProps): JSX.Element => {
  const ref: any = React.useRef(null)
  const [activeSuggestion, setActiveSuggestion] = React.useState(0)
  const [showSuggestions, setShowSuggestions] = React.useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<
    Array<string>
  >([])

  //close suggestions list when click outside
  React.useEffect(() => {
    const handleOutsideClick = () => {
      if (ref.current === null) {
        if (!showSuggestions) return
        setShowSuggestions(false)
      }
    }
    window.addEventListener('click', handleOutsideClick)
    return () => window.removeEventListener('click', handleOutsideClick)
  }, [showSuggestions, ref])

  const handleChange = React.useCallback(
    (e) => {
      const userInput = e.currentTarget.value
      const filteredSuggestions: Array<string> = suggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
      setActiveSuggestion(0)
      setFilteredSuggestions(filteredSuggestions)
      setShowSuggestions(true)
      setValue(e.currentTarget.value)
    },
    [setValue, suggestions]
  )
  const onClick = (e: any) => {
    setActiveSuggestion(0)
    setFilteredSuggestions([])
    setShowSuggestions(false)
    setValue(e.currentTarget.innerText)
  }
  const onKeyDown = (e: any) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0)
      setShowSuggestions(false)
      setValue(filteredSuggestions[activeSuggestion] || value)
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return
      }
      setActiveSuggestion(activeSuggestion - 1)
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }
      setActiveSuggestion(activeSuggestion + 1)
    }
  }
  let suggestionsListComponent
  if (showSuggestions && value) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className={style.suggestion.list}>
          {filteredSuggestions.map((suggestion, index) => {
            let className
            if (index === activeSuggestion) {
              className = `${style.suggestion.item} ${style.suggestion.activeItem}`
            }
            if (index !== activeSuggestion) {
              className = style.suggestion.item
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            )
          })}
        </ul>
      )
    } else {
      suggestionsListComponent = <div></div>
    }
  }
  return (
    <div className={style.container}>
      <input
        autoComplete="off"
        className={style.default}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        value={value}
        placeholder={placeholder}
      />
      {suggestionsListComponent}
    </div>
  )
}

export default AutoCompleteForm
