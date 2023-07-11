import Header from 'components/Header';
import * as S from './style'
import ProductImg from 'assets/product.png'

const Detail = () => {
    return (
        <>
        <Header />
        asd
        <S.Container>
            <S.ProjectContainer>
                <S.MainImage src={ProductImg}/>
                <S.Info>
                    
                </S.Info>
            </S.ProjectContainer>
        </S.Container>
        </>
    );
};

export default Detail;