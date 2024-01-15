Dado("que eu tenha importado um arquivo de endereços") do
    visit("http://localhost:8080/portal/explore")
    
    find("#close-alert").click
    find("i", :text => "settings").click
    find('label.file-select input[type="file"]', visible: false).attach_file(SUPPORT_TESTING[:pathFileCSV], make_visible: true)
    
    find('.inputs .el-select:nth-child(1) .el-input__inner').click
    find('.el-select-dropdown__item', text: 'nome da rua').click
    find('.inputs .el-select:nth-child(2) .el-input__inner').click
    find('.el-select-dropdown__item', text: 'numero').click
    find('.inputs .el-select:nth-child(3) .el-input__inner').click
    find('.el-select-dropdown__item', text: 'ano').click

    find('.btn-download', visible: :visible).click(wait: 10)
    sleep 5
end

Quando("eu clicar em {string}") do |buttonText|
    find('button', :text => buttonText)
end

Então("deve abrir uma tela de confirmação") do
    find('.popup-modal')
end

Então("deve ser baixado um arquivo formato {string}") do |fileFormat|

end