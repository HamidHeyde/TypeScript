import { useEffect, useRef } from "react"

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!inputRef || !inputRef.current) console.log("no ref")
    
    inputRef?.current?.focus()
  },[])

  return (
    <div>
      We are using ref to focus on this element on load
      <br/><br/>
      <input ref={inputRef} id="inputFocusElement"/>
      <br/><br/>
      <hr/>
    </div>
  )

}


export default InputFocus