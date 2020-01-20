import { connect } from 'react-redux';
import CarrinhoComponent from '../Components/Carrinho';

const mapStateToProps = state => ({
  itens: state
});

export default connect(mapStateToProps)(CarrinhoComponent);