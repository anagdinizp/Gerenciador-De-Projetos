import { ContainerLoader, Loader } from "./style";
import svg from '../../../Assets/Loader.svg'

const Loading = () => {

    return(
        <ContainerLoader>
            <Loader src={svg} alt="Loading"></Loader>
        </ContainerLoader>
    )
};



export default Loading;