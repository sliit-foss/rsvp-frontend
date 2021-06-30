export const mobileNavVariants = {
    initial: {
        width: 0
    },
    animate: {
        width: '100%',
        transition: {
            ease: [.6, .05, -.01, .9],
            duration: 0.6
        }
    },
    exit: {
        width: 0,
        transition: {
            ease: [.6, .05, -.01, .9],
            duration: 0.6
        }
    }
}

export const navElementsVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2
        }
    },
    exit: {
        opacity: 0
    }
}
