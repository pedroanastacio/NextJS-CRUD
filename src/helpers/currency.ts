export const toReal = (value: number): string => {
    return (`R$ ${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}

