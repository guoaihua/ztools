const getOwners = (dir) => {
    const files = fs.readdirSync(dir)
    const owners = []
    files.forEach((file) => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        const ownersFile = path.join(filePath, 'OWNERS')
        if (!fs.existsSync(ownersFile)) {
          owners.push(filePath)
        }
      }
    })
    return owners
  }