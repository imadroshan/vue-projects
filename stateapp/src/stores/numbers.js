import {defineStore} from 'pinia'

export const useNumbersStore = defineStore("numbers", {
    state: () => {
        return{
            numbers: [14,15,16,17,18,19,27]
        }
    },

    actions: {
        addNumber(num){
            this.numbers.push(num)
        }
    },
    getters: {
        doubleNumbers: (state) => {
            return state.numbers.map(num => num * 2)
        },
        filterNumber: (state) => {
            return (minNumber) => state.numbers.filter(num => num >= minNumber)
        }
    }
})