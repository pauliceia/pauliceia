Quando('eu filtro pela data inicial {string}') do |data|
  find('#startDateFilter').set(data).send_keys(:enter)
end

Então('espero visualizar {string} camadas como resultado') do |quantidade|
  expect(page).to have_selector('.box-layer-info', count: quantidade.to_i)
end

Quando('eu filtro pela data final {string}') do |data|
  find('#endDateFilter').set(data).send_keys(:enter)
end
