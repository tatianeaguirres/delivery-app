import React from 'react'
import { render } from '@testing-library/react'
import FormFreight from '../form-freight'

const handleInputChangeMock = jest.fn()

const mockProps = {
  typeGoods: 'typeGoods',
  volume: 'volume',
  volumeQuantity: 'volumeQuantity',
  lenght: '120',
  width: '140',
  height: '180',
  weight: '20',
  onTypeGoods: event => handleInputChangeMock(event, setTypeGoods),
  onVolume: event => handleInputChangeMock(event, setVolume),
  onVolumeQuantity: event => handleInputChangeMock(event, setVolumeQuantity),
  onLenght: event => handleInputChangeMock(event, setLenght),
  onWidth: event => handleInputChangeMock(event, setWidth),
  onHeight: event => handleInputChangeMock(event, setHeight),
  onWeight: event => handleInputChangeMock(event, setWeight)
}

describe('<FormFreight/>', () => {
  it('renders the title', () => {
    const { getByText } = render(<FormFreight {...mockProps} />)

    expect(getByText('Freight Details')).toBeInTheDocument()
  })

  it('renders labels', () => {
    const { getByLabelText } = render(<FormFreight {...mockProps} />)

    expect(getByLabelText('Paper')).toBeInTheDocument()
    expect(getByLabelText('Volume')).toBeInTheDocument()
    expect(getByLabelText('Weight')).toBeInTheDocument()
  })

  it('renders select', () => {
    const { getByDisplayValue } = render(<FormFreight {...mockProps} />)

    expect(getByDisplayValue('Palet')).toBeInTheDocument()
    expect(getByDisplayValue('1')).toBeInTheDocument()
  })

  it('renders inputs', () => {
    const { getByDisplayValue } = render(<FormFreight {...mockProps} />)

    expect(getByDisplayValue('120')).toBeInTheDocument()
    expect(getByDisplayValue('140')).toBeInTheDocument()
    expect(getByDisplayValue('180')).toBeInTheDocument()
    expect(getByDisplayValue('20')).toBeInTheDocument()
  })
})
