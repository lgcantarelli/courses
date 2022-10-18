import { render, screen } from '@testing-library/react'
import Options from '../Options'

test('displays image for each scoop option from server', async () => {
  render(<Options optionType='scoops'/>)

  const images = await screen.findAllByRole('img', { name: /scoop$/i })

  expect(images).toHaveLength(2)

  const altTexts = images.map(e => e.alt)
  expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})