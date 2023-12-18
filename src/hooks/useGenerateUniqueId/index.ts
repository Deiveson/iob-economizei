export const useGenerateUniqueId = (): string => {
    return 'id' + Math.random().toString(16).slice(2)
}
