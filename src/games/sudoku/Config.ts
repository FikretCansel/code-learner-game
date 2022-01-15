import { AUTO, Scale, Types } from 'phaser';
import { GameScene } from './scenes/GameScene';
import { PreloadScene } from './scenes/PreloadScene';
import { BACKGROUND_COLOR } from './scenes/Style';

export const config: Types.Core.GameConfig = {
  title: 'Sudoku',
  type: AUTO,
  scene: [PreloadScene, GameScene],
  backgroundColor: BACKGROUND_COLOR,
  scale: {
    width: 800,
    height: 1200,
    parent: 'game',
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
};
