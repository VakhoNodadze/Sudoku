import React from 'react'
import Modal from '../primitives/Modal'
import Button from '../primitives/Button'
import  { withTheme } from 'styled-components'
import { FormProvider, useForm } from "react-hook-form"
import {
  StyledContainer,
  FormContainer
} from './styled'

const DifficultyModal = ({ isOpen, onClose, difficulty, theme, setDifficulty }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            difficulty
        }
      })
      const onSubmit = data => {
          setDifficulty(data.difficulty)
          onClose()
      }
    return(
        <Modal isOpen={isOpen} onClose={onClose} size="medium">
            <StyledContainer>
                <h1 style={{fontSize: '2.4rem', textAlign: 'center'}}>Choose Difficulty</h1>
                <FormContainer>
                    <FormProvider>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div style={{margin: '4rem 0 6rem 0', padding: '0 4rem'}}>
                                <div style={{marginBottom: '1rem', color: theme.color.black}}>
                                    <input type="radio" name="difficulty" value="Easy" ref={register} />
                                    <label style={{fontSize: theme.fontSize.big, marginLeft: '2rem'}}>Easy 3-5 preffiled numbers</label>
                                </div>
                                <div style={{marginBottom: '1rem', color: theme.color.black}}>
                                    <input type="radio" name="difficulty" value="Medium" ref={register} />
                                    <label style={{fontSize: theme.fontSize.big, marginLeft: '2rem'}}>Medium 2-4 preffiled numbers</label>
                                </div>
                                <div style={{marginBottom: '1rem', color: theme.color.black}}>
                                    <input type="radio" name="difficulty" value="Hard" ref={register} />
                                    <label style={{fontSize: theme.fontSize.big, marginLeft: '2rem'}}>Hard 1-3 preffiled numbers</label>
                                </div>
                            </div>
                            <Button 
                                style={{width: '20rem', margin: 'auto'}}
                                variant="primary" 
                                color="primary" 
                                fontSize={theme.fontSize.big}
                                fluid 
                                circular 
                                button
                                >
                                Create
                            </Button>
                        </form>
                    </FormProvider>
                </FormContainer>
            </StyledContainer>
        </Modal>
    )
}
export default withTheme(DifficultyModal)
