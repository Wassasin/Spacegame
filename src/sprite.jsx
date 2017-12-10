import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Vector from 'victor';

import {Image} from 'react-konva';

const Sprite = ({image, pos, rotation, viewport}) => {
  const offset = new Vector(image.width/2, image.height/2);
  const coords = viewport.size.clone().divide(new Vector(2, 2)).add(viewport.center).subtract(pos);

  return <Image
    x={coords.x}
    y={coords.y}
    offsetX={offset.x}
    offsetY={offset.y}
    rotation={rotation}
    image={image}
  />;
}

export default connect(({game}, {image, pos, rotation}) => ({
    image,
    rotation,
    pos,
    viewport: game.viewport,
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)(Sprite);