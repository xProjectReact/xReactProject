import { UPDATE_AGE, UPDATE_SLEEP } from '../actions/types';

const initialState = {
  // min = 0, max = 100
  hunger: 100,
  mood: 100,
  health: 100,
  sleep: 100,
  energy: 100,
  arousal: 0,
  purity: 100
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SLEEP:
      return Object.assign({}, state, {
        sleep: action.value
      });

    default:
      return state;
  }
};

// general: {
//   name: 'Tiffany',
//   surname: 'Bloom',
//   age: 0
// },
// femStats: {
//   femininity: {
//     value: 0,
//     description: `You are still not used to the fact that you're now a girl and this depresses you a little.`
//   },
//   femininityExponent: {
//     value: 1,
//     description: `This is how fast you adapt to the thougts of living as a happy girl.`
//   }
// },
// body: {
//   height: {
//     value: 165,
//     description: `How tall you are. At the moment this is not affecting the game in any way.`
//   },
//   weight: {
//     value: 50,
//     description: `How much you weigh, Affects your mood, energy consumption, health and most importantly how you look.`
//   },
//   lips: {
//     value: 2,
//     description: `How beautiful your lips look.`
//   },
//   bodyHair: {
//     value: 3,
//     description:
//       'How much body hair you have, affects how fast you get dirty, looks(especially when wearing a skirt or sleeveless), and how comfortable you feel.'
//   },
//   bodyFat: {
//     value: 3, // 1 - fitness model, 10 - obese
//     description: `Your body fat ratio.`
//   },
//   bodyExponent: {
//     value: 0, // if > 1000 bodyFat - 1, if < -1000 bodyFat + 1
//     description: `The value that represents the direction your body is leaning right now
//      (to get more fit(positive value) or fatter(negative value)). Crossing 1000 will change your current body type.`
//   },
//   faceBeauty: 3, // max = 10
//   absBeauty: 2, // max = 10
//   buttBeauty: 2, // max = 10
//   boobsBeauty: 5
// },
