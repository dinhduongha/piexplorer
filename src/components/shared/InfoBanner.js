import React from 'react'
import Col from 'react-bootstrap/lib/Col'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

// import FetchPonyfill from 'fetch-ponyfill'
// import isEmpty from 'lodash/isEmpty'

// const fetch = FetchPonyfill().fetch

 const BANNER_JSON =
   'https://raw.githubusercontent.com/chatch/stellarexplorer/master/banner.json'

const InfoBanner = ({message}) => (
  <Grid style={{marginBottom: 0}}>
    <Row>
      <Col style={{marginTop: 0, marginBottom: 0, paddingLeft: 0}}>
        <div class="dark" data-ea-publisher="steexp" data-ea-type="text">
	<br/>
	WE LOVE PI, WE RUN PI NODE ;)
	<br/>
	Chat: <a href="https://t.me/PiNodeGroup" target="_blank">t.me/PiNodeGroup</a>
	<br/>
	{/*
	Donate if you can: 
	<table>
	  <tr>
	    <td><a href="https://www.coingecko.com/en/coins/elrond">eGLD</a> erd1rzp4r4x9tgtksrw8c52ynqkeesja0n9dwjjn6mrlsrdt6g7unejql2a9hf</td>
	  </tr>
	  <tr>
            <td><a href="https://www.coingecko.com/en/coins/polkadot">DOT</a> 13KGP6pDp8ZBbRAvbWqW8EHZbYFPfUY2huyNNzaa4bmBBpxQ</td>
            <td><a href="https://www.coingecko.com/en/coins/tixl">TIXL</a> bnb19mdl00kreydm6x6wz0jlasng3t9zu3tq89qs98</td>
	  </tr>
	</table>		
	*/}
	</div>
  {/*
        <div class="dark" data-ea-publisher="steexp" data-ea-type="image"></div> 
   */}

  {/* <span id="banner-message" dangerouslySetInnerHTML={{__html: message}} /> */}
      </Col>
    </Row>
  </Grid>
)

// class InfoBannerContainer extends React.Component {
//   state = {}

//   componentDidMount() {
//     fetch(BANNER_JSON)
//       .then(rsp => rsp.json())
//       .then(({message, expiry}) => {
//         if (
//           !isEmpty(message) &&
//           Number.isInteger(Number(expiry)) &&
//           expiry > Date.now()
//         ) {
//           this.setState({message})
//         }
//       })
//       .catch(err => {
//         console.error(`Failed to fetch banner.json: [${err}]`)
//         console.error(`stack: [${err.stack}]`)
//       })
//   }

//   render() {
//     return <InfoBanner message={this.state.message} />
//   }
// }

export default InfoBanner
