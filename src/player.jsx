import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Image} from 'react-konva';

import Sprite from './sprite';

import src from './images/player.png';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };
  }

  componentDidMount() {
    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      this.setState({
        image: image
      });
    }
  }

  render() {
      const {pos, rotation} = this.props;
      const {image} = this.state;

      if (!image) {
        return null;
      }

      return (
          <Sprite
            pos={pos}
            rotation={rotation}
            image={image}
          />
      );
  }
}

export default connect((state, props) => ({
  pos: state.game.player.pos,
  rotation: state.game.player.rotation,
}), (dispatch) => bindActionCreators({}, dispatch))(Player);