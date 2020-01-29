import { connect } from 'react-redux';
import CarrinhoComponent from '../Components/Carrinho';
import { Creators, Selectors as carrinhoSelectors } from '../ducks/carrinho';

const mapStateToProps = state => ({
  itens: carrinhoSelectors.getItens(state)
});

const mapDispatchToProps = dispatch => ({
  onClick(itemId) {
    dispatch(Creators.removeItem(itemId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarrinhoComponent);