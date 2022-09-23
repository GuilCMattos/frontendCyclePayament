import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3030/api'

import {reset as resetForm} from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'


export function getList() { 
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return { 
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) { 

    return dispatch => { 
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp=> { 
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            }).catch(e => { 
    
              toastr.error('Erro', 'Algum dado não foi colocado')
            })
       

    }


}

export function showUpdate(billingCycle) { 
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate')
    ]
}