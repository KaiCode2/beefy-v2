import { createSelector } from '@reduxjs/toolkit';
import type { BeefyState } from '../../../redux-types';
import type { BridgeEntity } from '../entities/bridge';
import { createCachedSelector } from 're-reselect';

export const selectBridgeById = createCachedSelector(
  (state: BeefyState) => state.entities.bridges.byId,
  (_: BeefyState, bridgeId: BridgeEntity['id']) => bridgeId,
  (byId, bridgeId) => {
    if (byId[bridgeId] === undefined) {
      throw new Error(`selectBridgeById: Unknown bridge id ${bridgeId}`);
    }
    return byId[bridgeId];
  }
)((state: BeefyState, bridgeId: BridgeEntity['id']) => bridgeId);

export const selectBridgeByIdIfKnown = createCachedSelector(
  (state: BeefyState) => state.entities.bridges.byId,
  (_: BeefyState, bridgeId: BridgeEntity['id']) => bridgeId,
  (byId, bridgeId): BridgeEntity | undefined => {
    if (byId[bridgeId] === undefined) {
      console.warn(`selectBridgeByIdIfKnown: Unknown bridge id ${bridgeId}`);
    }
    return byId[bridgeId];
  }
)((state: BeefyState, bridgeId: BridgeEntity['id']) => bridgeId);

export const selectAllBridges = createSelector(
  (state: BeefyState) => state.entities.bridges.allIds,
  (state: BeefyState) => state.entities.bridges.byId,
  (ids, byId) => ids.map(id => byId[id])
);
