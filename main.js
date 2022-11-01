window.addEventListener('DOMContentLoaded', (event) => {
   // State
   initialState =
   {
      discount: 0,
      sub_total: 0,
      total: 0
   };

   // Reducer
   const reducer = (state = initialState, action) => {
      switch (action.type) {
         case "ADD_ITEM":
            return {
               ...state, sub_total: parseInt(state.sub_total) + parseInt(action.payload)
            };
         case "REMOVE_ITEM":
            return {
               ...state,
               sub_total: parseInt(state.sub_total) - parseInt(action.payload)

            }
         case "CHANGE_USER":
            return {
               ...state,
               discount: action.payload
            }

      }
      return { ...state };
   }
   // redux instance
   const store = Redux.createStore(reducer);

   // subscribe to changes in global store
   store.subscribe(() => {
      const state = store.getState();

      discount.value = state.discount
      sub_total.value = state.sub_total
      total.value = state.total
   })

   // Add Items
   add_item.addEventListener('click', (e) => {
      store.dispatch({ type: "ADD_ITEM", payload: 2000 })
   });

   // Remove Items
   remove_item.addEventListener('click', (e) => {
      store.dispatch({ type: "REMOVE_ITEM", payload: 2000 })
   });

   // Change User
   users.addEventListener('change', (e) => {
      const value = e.target.value
      console.log(value)
      store.dispatch({ type: "CHANGE_USER", payload: value })
   })

});