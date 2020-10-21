import {connect} from 'react-redux'

import Test from '../components/test'
import {increment,decrement} from '../redux/action'

export default connect(
    state =>({count: state}),
    {increment,decrement}
)(Test)