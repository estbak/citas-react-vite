const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white text-center font-bold uppercase mb-3 rounded-md p-3">
        <p>{children}</p></div>
  )
}

export default Error