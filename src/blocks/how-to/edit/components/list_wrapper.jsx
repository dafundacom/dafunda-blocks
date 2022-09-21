export function ListWrapper(props) {
  const { className, children, listStyle } = props
  return listStyle === 'ordered' ? (
    <ol className={className || null}>{children}</ol>
  ) : (
    <ul
      className={className || null}
      style={{ listStyleType: listStyle === 'none' ? 'none' : null }}
    >
      {children}
    </ul>
  )
}
