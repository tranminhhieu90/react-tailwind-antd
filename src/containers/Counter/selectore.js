import { createSelector } from '@reduxjs/toolkit'
const selectCounter = state => state.counter

export const counterSelector = createSelector(selectCounter, state => state)