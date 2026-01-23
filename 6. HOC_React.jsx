const withLoader = (WrappedComponent) => {
        return function LoaderComponent({ isLoading, ...props}){
            if (isLoading){
                return <p>Loading</p>
            }
        }
}