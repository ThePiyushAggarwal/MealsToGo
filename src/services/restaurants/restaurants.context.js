import React, { useState, createContext, useEffect, useMemo } from 'react';

import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service';

const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{ restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsContext;
