100.times do |i|
  Level.seed(:id,
    {id: i, name: "LEVEL #{i}", info: ""},
  )
end