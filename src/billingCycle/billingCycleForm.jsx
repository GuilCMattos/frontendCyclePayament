import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector} from 'redux-form'
import LabelInput from '../common/form/labelInput'
import Summary from './Summary'

import {init} from './billingCycleActions'
import ItemList from './itemList'

class billingCycleForm extends Component { 
    render() { 
        const {handleSubmit, readOnly, credits, debts} = this.props
     
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelInput}
                    label='Nome' cols='12 4' readOnly={readOnly} placeholder='Informe o nome' />
                    <Field name='month' component={LabelInput} readOnly={readOnly} 
                    label='Mês' cols='12 4' type="number" placeholder='Informe o mês' />
                    <Field name='year' component={LabelInput}
                    readOnly={readOnly}
                    label='Ano' cols='12 4' type="number" placeholder='Informe o ano'
                    />

                <Summary credit={1000} debt={100}/>

                    <ItemList cols='12 6' readOnly={readOnly} list={credits}
                    field="credits" legend='Créditos'
                    />

                    <ItemList cols='12 6' readOnly={readOnly} list={debts}
                    field="debts" legend='Débitos' showStatus={true}
                    />
                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

billingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(billingCycleForm)

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({credits: selector(state, 'credits'),
debts:selector(state, 'debts')})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(billingCycleForm)