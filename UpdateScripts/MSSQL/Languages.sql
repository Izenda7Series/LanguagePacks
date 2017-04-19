
/* Arabic (ar) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ar')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'ar', 'Arabic', 0);
    END
END

/* Bulgarian (bg) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'bg')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'bg', 'Bulgarian', 0);
    END
END

/* ChinesePeoplesRepublicofChina (zh-CN) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'zh-CN')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'zh-CN', 'ChinesePeoplesRepublicofChina', 0);
    END
END

/* ChineseTaiwan (zh-TW) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'zh-TW')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'zh-TW', 'ChineseTaiwan', 0);
    END
END

/* Croatian (hr) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'hr')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'hr', 'Croatian', 0);
    END
END

/* Czech (cs) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'cs')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'cs', 'Czech', 0);
    END
END

/* Danish (da) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'da')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'da', 'Danish', 0);
    END
END

/* Dutch (nl) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'nl')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'nl', 'Dutch', 0);
    END
END

/* Estonian (et) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'et')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'et', 'Estonian', 0);
    END
END

/* Finnish (fi) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'fi')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'fi', 'Finnish', 0);
    END
END

/* French (fr) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'fr')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'fr', 'French', 0);
    END
END

/* German (de) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'de')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'de', 'German', 0);
    END
END

/* Greek (el) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'el')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'el', 'Greek', 0);
    END
END

/* Hebrew (iw) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'iw')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'iw', 'Hebrew', 0);
    END
END

/* Hindi (hi) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'hi')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'hi', 'Hindi', 0);
    END
END

/* Hungarian (hu) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'hu')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'hu', 'Hungarian', 0);
    END
END

/* Icelandic (is) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'is')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'is', 'Icelandic', 0);
    END
END

/* Italian (it) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'it')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'it', 'Italian', 0);
    END
END

/* Japanese (ja) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ja')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'ja', 'Japanese', 0);
    END
END

/* Korean (ko) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ko')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'ko', 'Korean', 0);
    END
END

/* Latvian (lv) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'lv')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'lv', 'Latvian', 0);
    END
END

/* Lithuanian (lt) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'lt')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'lt', 'Lithuanian', 0);
    END
END

/* Macedonian (mk) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'mk')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'mk', 'Macedonian', 0);
    END
END

/* Norwegian (no) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'no')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'no', 'Norwegian', 0);
    END
END

/* Polish (pl) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'pl')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'pl', 'Polish', 0);
    END
END

/* Portuguese (pt) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'pt')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'pt', 'Portuguese', 0);
    END
END

/* Romanian (ro) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ro')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'ro', 'Romanian', 0);
    END
END

/* Russian (ru) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ru')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'ru', 'Russian', 0);
    END
END

/* Serbian (sr) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'sr')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'sr', 'Serbian', 0);
    END
END

/* Slovenian (sl) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'sl')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'sl', 'Slovenian', 0);
    END
END

/* Swedish (sv) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'sv')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'sv', 'Swedish', 0);
    END
END

/* Turkish (tr) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'tr')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'tr', 'Turkish', 0);
    END
END

/* Ukrainian (uk) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'uk')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'uk', 'Ukrainian', 0);
    END
END
