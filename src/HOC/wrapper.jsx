
const WrapperComponent = (Component) => ({...props}) => (
    <>
        <Component {...props }/>
    </>
)
    
export default WrapperComponent;