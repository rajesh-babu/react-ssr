import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cmsDataActions from './actions';
//import logo from '@assets/images/logo.png'; // example of import assets image
import { PageTitle } from '@common/components';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Comp1 from '../Comp1';
import Comp2 from '../Comp2';

class Home extends React.Component {
 /*  static propTypes = {
    cmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  }; */
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    //this.props.actions.prefetchCMSData();
  }

  render(){
    const { cmsData } = this.props;
    return(
      <PageTitle title="Home">  
      {
        cmsData.compArr && cmsData.compArr.map(function(item, i){  
          switch (item.componenttype ) {
            case 'htmlText':
              return <div key={i}>{ReactHtmlParser(item.data.tvalue)}</div>;
              break;

            case 'Comp1':
              return <Comp1 key={i} data={item.data}></Comp1>

            case 'Comp2':
            return <Comp2 key={i} data={item.data}></Comp2>
          }
          
        })  
      }
    </PageTitle>
    )
  }
}

export default connect(
  state => ({cmsData:state.cmsData.data_cmsData, isFetching: state.cmsData.isFetching_cmsData}),
  dispatch => ({ actions: bindActionCreators(cmsDataActions, dispatch) })
)(Home);
