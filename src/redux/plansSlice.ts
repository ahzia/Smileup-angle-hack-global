import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { data } from '../../lib/plans';

// Define initial state
const initialState = {
  community: data.community,
  categories: data.categories
};

// Create slice
const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    joinPlan(state, action: PayloadAction<{ planId: number; userId: number }>) {
      state.categories.forEach(category => {
        category.plans.forEach(plan => {
          if (plan.plan_id === action.payload.planId && plan.participants < plan.max_participants) {
            plan.participants++;
          }
        });
      });
    },
    leavePlan(state, action: PayloadAction<{ planId: number; userId: number }>) {
      state.categories.forEach(category => {
        category.plans.forEach(plan => {
          if (plan.plan_id === action.payload.planId && plan.participants > 0) {
            plan.participants--;
          }
        });
      });
    },
    addChatMessage(
      state,
      action: PayloadAction<{ planId: number; userId: number; message: string; timestamp: string }>
    ) {
      state.categories.forEach(category => {
        category.plans.forEach(plan => {
          if (plan.plan_id === action.payload.planId) {
            plan.groupChat.push({
              id: plan.groupChat.length + 1,
              userId: action.payload.userId,
              message: action.payload.message,
              timestamp: action.payload.timestamp
            });
          }
        });
      });
    }
  }
});

export const { joinPlan, leavePlan, addChatMessage } = plansSlice.actions;
export default plansSlice.reducer;
