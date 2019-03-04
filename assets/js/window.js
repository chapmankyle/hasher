$(() => {
    const crypt = require('crypto')

    $('#text-input').bind('input propertychange', function() {
        const text = this.value

        const md5 = crypt.createHash('md5').update(text, 'utf8').digest('hex')
        $('#md5-hash').val(md5)

        const sha1 = crypt.createHash('sha1').update(text, 'utf8').digest('hex')
        $('#sha1-hash').val(sha1)

        const sha256 = crypt.createHash('sha256').update(text, 'utf8').digest('hex')
        $('#sha256-hash').val(sha256)

        const sha512 = crypt.createHash('sha512').update(text, 'utf8').digest('hex')
        $('#sha512-hash').val(sha512)
    })

    $('#text-input').focus()
})