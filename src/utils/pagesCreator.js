export function createPages(pages, pagesCount, currentPage, wideNumber = 10) {
    if (pagesCount > wideNumber) {
        if (currentPage > wideNumber / 2) {
            for (let i = currentPage - (wideNumber / 2); i < currentPage + wideNumber / 2; i++) {

                pages.push(i)
                if (i === pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= wideNumber; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}